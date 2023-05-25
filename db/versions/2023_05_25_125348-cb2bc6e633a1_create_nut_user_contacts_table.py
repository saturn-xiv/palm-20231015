"""create nut.user-contacts table

Revision ID: cb2bc6e633a1
Revises: 44c63f3a22df
Create Date: 2023-05-25 12:53:48.632892

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cb2bc6e633a1'
down_revision = '44c63f3a22df'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'user_contacts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('key', sa.String(length=255), nullable=False),
        sa.Column('value', sa.LargeBinary, nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_user_contacts', 'user_contacts',
                    ['user_id', 'key'], unique=True)


def downgrade() -> None:
    op.drop_table('user_contacts')
