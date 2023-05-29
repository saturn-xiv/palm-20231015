"""create nut.footprints table

Revision ID: f0e171352bfb
Revises: 77a369046c39
Create Date: 2023-05-25 17:42:09.178248

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0e171352bfb'
down_revision = '77a369046c39'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'footprints',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_footprints_resource_type',
                    'footprints', ['resource_type'])


def downgrade() -> None:
    op.drop_table('footprints')
