"""create nut.google-users table

Revision ID: 2729e9930cb6
Revises: 702d4af0290c
Create Date: 2023-05-25 13:43:47.081784

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2729e9930cb6'
down_revision = '702d4af0290c'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'wechat_google_users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('sub', sa.String(length=127), nullable=False, unique=True),
        sa.Column('code', sa.LargeBinary, nullable=False),
        sa.Column('token', sa.String(length=127), nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )


def downgrade() -> None:
    op.drop_table('wechat_google_users')
